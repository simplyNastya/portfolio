import { InfinitySpin } from "react-loader-spinner";
import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <InfinitySpin
        width="200"
        animationDuration="0.75"
        color="#2196F3"
        visible={true}
      />
    </div>
  );
};

export default Loader;
