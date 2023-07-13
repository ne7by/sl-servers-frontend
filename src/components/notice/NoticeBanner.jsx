import React, {useContext} from "react";
import {NoticeContext} from "./NoticeContext";

const NoticeBanner = () => {
    const notice = useContext(NoticeContext);

    if (notice.length === 0) {
        return null;
    }

    const alertClass = notice.split(',')[0];
    const alertContents = notice.replace(`${alertClass},`, '');

    return (
        <div className={`alert alert-${alertClass}`} style={{
            borderRadius: 0
        }}>
            {alertContents}
        </div>
    );
};

export default NoticeBanner;
