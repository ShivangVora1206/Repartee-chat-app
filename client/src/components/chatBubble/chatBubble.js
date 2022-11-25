import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { Buffer } from "buffer";
export default function ChatBubble(props) {
    // const [image, setImage] = useState();
    // console.log("props", props);
    // useEffect(()=>{
    //     props.socket.on("image", m=>{
    //         console.log(m);
    //         const b64 = Buffer(m).toString('base64');
    //         // console.log(b64);
    //         setImage(b64);
    //     })
    // }, [])

    let time = props.time;
    // console.log(time);
    if(time[17] === ":"){

        time = time.slice(11, 17);
    }else{
        time = time.slice(11, 16);
    }

    return (
		<>
			{props.sender ? (
				props.type === "image" ? (
					<>
					<div className={styles.containerme}>
						<p className={styles.username}>{props.from}</p>
                        <img className={styles.messageImage} src={`data:${props.mimeType};base64,${props.image}`} alt=""/>
						<h4 className={styles.time}>{time}</h4>
					</div>
                    </>
				) : (
					<div className={styles.containerme}>
						<p className={styles.username}>{props.from}</p>
						<p className={styles.meesagebody}>{props.message}</p>
						<h4 className={styles.time}>{time}</h4>
					</div>
				)
			) : (
				props.type === "image" ? (
					<>
					<div className={styles.container}>
						<p className={styles.username}>{props.from}</p>
                        <img className={styles.messageImage} src={`data:${props.mimeType};base64,${props.image}`} alt=""/>
						<h4 className={styles.time}>{time}</h4>
					</div>
                    </>
				) : (
					<div className={styles.container}>
						<p className={styles.username}>{props.from}</p>
						<p className={styles.meesagebody}>{props.message}</p>
						<h4 className={styles.time}>{time}</h4>
					</div>
				)
			)
            }
		</>
	);
}