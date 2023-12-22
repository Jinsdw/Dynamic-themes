import { Link } from "react-router-dom"
import styles from './index.module.less'
import { Button, ColorPicker } from 'antd'

export default () => {
    return <div className={styles.home}>
        <div className={styles.title}>
            <span className={styles.titleName}>动态皮肤切换</span>
            <ColorPicker onChangeComplete={(val) => {
                console.log(val?.toHexString());
                
            }} />
        </div>
        <div className={styles.span1}>
            使用成本很低
        </div>
        <div className={styles.span2}>
            浏览器兼容性良好（IE9+ ?，待验证 ，但 vite 构建的产物
        </div>
    </div>
}