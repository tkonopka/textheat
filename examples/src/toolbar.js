/** A custom toolbar **/

import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Popover from '@mui/material/Popover';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import BrushIcon from '@mui/icons-material/Brush';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {useState} from "react";


function PaintToolbar({paintValue, setPaintValue, handlePaint}) {
    return <Stack direction={"row"} alignItems="center" spacing={2}>
        <Box sx={{width: 120}}>
            <IconButton color="primary" aria-label="set weight" component="span"
                        onClick={handlePaint}>
                <BrushIcon />
            </IconButton>
        </Box>
        <Box sx={{width: 80}}>
            <Typography id="input-slider" gutterBottom align={"right"}>
                weight
            </Typography>
        </Box>
        <Box sx={{width: 100}}>
            <Slider defaultValue={0.0} min={0} max={1.0} step={0.01}
                    size={"small"}
                    value={paintValue}
                    onChange={(e,v) => {setPaintValue(v)}}
                    aria-label="weight"
                    valueLabelDisplay="auto"
            />
        </Box>
    </Stack>
}

function TouchUpToolbar({touchValue, setTouchValue, handleUpdate}) {
    return <Stack direction={"row"} alignItems="center" spacing={2}>
        <Box sx={{width: 120}}>
            <IconButton color="primary" aria-label="increase weight on selection" component="span"
                        onClick={(e) => handleUpdate(e, touchValue)}>
                <AddIcon />
            </IconButton>
            <IconButton color="primary" aria-label="decrease weight on selection" component="span"
                        onClick={(e) => handleUpdate(e, -touchValue)}>
                <RemoveIcon />
            </IconButton>
        </Box>
        <Box sx={{width: 80}}>
            <Typography id="input-slider" gutterBottom align={"right"}>
                increment
            </Typography>
        </Box>
        <Box sx={{width: 100}}>
            <Slider defaultValue={0.0} min={0} max={1.0} step={0.01}
                    size={"small"}
                    value={touchValue}
                    onChange={(e,v) => {setTouchValue(v)}}
                    aria-label="weight increment"
                    valueLabelDisplay="auto"
            />
        </Box>
    </Stack>
}


function PopoverContent({data}) {
    return <div className={"popover"}>
        <Typography component={"div"}>Current data and weights in the <code>TextHeat</code> box</Typography>
        <code>{JSON.stringify(data)}</code>
    </div>
}


export default function TextHeatToolbar({target}) {
    const [mode, setMode] = useState("paint")
    const [paintValue, setPaintValue] = useState(1)
    const [touchValue, setTouchValue] = useState(0.25)
    const [anchorEl, setAnchorEl] = useState(null);
    const [content, setContent] = useState(null)
    const open = Boolean(anchorEl);

    const handleMode = (e, v) => {
        if (v !== null) setMode(v);
    };
    const handlePaint = (e) => {
        e.preventDefault()
        target.current.setWeight(paintValue)
    }
    const handleUpdate = (e, v) => {
        e.preventDefault()
        target.current.incrementWeight(v)
    }
    const handleShow = (e) => {
        setContent(target.current.getContent())
        setAnchorEl(e.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    };
    return <Grid container direction="row" justify={"space-between"}>
        <Grid item xs={11}>
            <Stack className="toolbar" direction="row" spacing={2} alignItems="center">
                <ToggleButtonGroup
                    value={mode}
                    size="small"
                    exclusive
                    onChange={handleMode}
                    aria-label="mode for adjusting textheat weights"
                >
                    <ToggleButton value="paint" onClick={(e) => setMode("paint")}>Paint</ToggleButton>
                    <ToggleButton value="touch-up" onClick={(e) => setMode("touch-up")}>Touch-up</ToggleButton>
                </ToggleButtonGroup>
                {mode === "paint" ?
                    <PaintToolbar
                        paintValue={paintValue}
                        setPaintValue={setPaintValue}
                        handlePaint={handlePaint}
                    />
                    :
                    <TouchUpToolbar
                        touchValue={touchValue}
                        setTouchValue={setTouchValue}
                        handleUpdate={handleUpdate}
                    />
                }
            </Stack>
        </Grid>
        <Grid item xs={1}>
            <Stack className="toolbar" direction="row" alignItems="center" justifyContent="flex-end">
                <IconButton color="primary" aria-label="show data" component="span"
                            onClick={handleShow}>
                    <VisibilityIcon />
                </IconButton>
                <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                >
                    <PopoverContent data={content} />
                </Popover>
            </Stack>
        </Grid>
    </Grid>
}
