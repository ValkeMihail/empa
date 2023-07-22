
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import styles from  './circularProgress.module.scss';

export const CircularProgressWithLabel = ( props: CircularProgressProps & { value: number },) => {
  return (
    <div className={`${styles.circularProgress} flexRow`}>
      <CircularProgress variant="determinate" {...props} />
        <h4 className={styles.absoluteHeader}>
        {`${Math.round(props.value)}%`}
        </h4>
    </div>
  );
}
