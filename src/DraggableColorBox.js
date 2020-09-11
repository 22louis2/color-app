import React from 'react';
import {SortableElement} from 'react-sortable-hoc';
import {withStyles} from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/DraggableColorBoxStyles';

const DraggableColorBox = SortableElement(props => {
    const {classes, name, color, handleClick} = props;
    return (
        <div 
            style={{backgroundColor: color}}
            className={classes.root}
        >
            <div className={classes.boxContent}>
                <span>{name}</span>
                <DeleteIcon 
                    className={classes.deleteIcon} 
                    onClick={handleClick} 
                />
            </div>
        </div>
    );
});

export default withStyles(styles)(DraggableColorBox);
