
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import styles from  './circularProgress.module.scss';

export const CircularProgressWithLabel = ( props: CircularProgressProps & { value: number },) => {
  return (
    <div className='flexRow circularProgress'>
      <CircularProgress variant="determinate" {...props} />
        <h4 className='absoluteHeader'>
        {`${Math.round(props.value)}%`}
        </h4>
    </div>
  );
}
