/** manipulation of colors **/


/**
 * convert a hex color to a length-3 rgb array with values in [0, 1]
 *
 * @param x string, hex color
 * @returns {unknown[]} array of length 3 with rgb values in [0, 1]
 */
export function hex2rgb(x) {
    return [1,3,5]
        .map((i) => x.substr(i, 2))
        .map((v) => parseInt(v, 16))
        .map((v) => v/255)
}


/**
 * convert a length-3 rgb array with values in [0, 1] to a hex color code
 *
 * @param x array of length 3 with [0, 1] values
 * @returns {string} hex color
 */
export function rgb2hex(x) {
    return "#" +  x
        .map((v) => Math.round(v*255))
        .map((v) => v.toString(16).padStart(2, "0"))
        .join("")
}


/** parse a css color string like rgb(0, 255, 0) to a hex code **/
export function css2hex(x) {
    return "#" + x.replace("rgb(", "").replace(" ", "").replace(")", "")
        .split(",")
        .map((v) => parseInt(v).toString(16).padStart(2, "0"))
        .join("")
}


/**
 * create an array of n hex colors, from start to end
 *
 * @param start string, hex color
 * @param end string, hex color
 * @param n integer, length of output array
 * @returns {string[]}
 */
export function colorRamp(start, end, n=2) {
    const start_rgb = hex2rgb(start), end_rgb = hex2rgb(end)
    const increment_rgb = [0,1,2]
        .map((i) => (end_rgb[i] - start_rgb[i]) / (n-1))
    return Array.from((new Array(n)).keys())
        .map((i) =>
            [0,1,2].map((j) => start_rgb[j] + i*increment_rgb[j])
        )
        .map(x => rgb2hex(x))
}


/** create an array of colors of length n
 *
 * @param colors array of colors, which will be expanded to length n
 * @param n integer, final length of array
 * @returns {string[]} array of hex colors, some colors may be repeated at
 * boundaries between color steps defined by the short colors array; when
 * n is large, these repeats should not be noticeable
 */
export function colorArray(colors, n=128) {
    const col_len = colors.length
    if (col_len >= n) return colors.slice(0, n)
    if (col_len === 2) return colorRamp(colors[0], colors[1], n)
    const result = new Array(n)
    const ramp_len = Math.ceil(n / (col_len-1))
    for (let i = 0; i < (col_len-1); i++) {
        let ramp = colorRamp(colors[i], colors[i+1], ramp_len)
        for (let j = 0; j < ramp_len; j++) {
            result[Math.min(Math.round(i*n/(col_len-1)) + j, n - 1)] = ramp[j]
        }
    }
    return result
}
