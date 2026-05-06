import React from 'react';
import {info} from "./inf.js";

function InfoDetails() {
    return (
        <div className={'container info-details'}>
            <h3 className={'my-5'}>Below is a list of frequently asked questions about visiting Sentob Village. If you
                still have
                questions, please contact us.</h3>
            <div className={'d-flex justify-content-center align-items-center'}>
                <div className="col-10">
                    <ol>
                        {
                            info.map((item, i) =>
                                <React.Fragment key={i}>
                                    <li>
                                        {item.title}
                                        <div>
                                            <ol type="A">
                                                {
                                                    item?.list.map((item2, i2) =>
                                                        <React.Fragment key={i2}>
                                                            <li>{item2.name}:</li>
                                                            {
                                                                item2.text.map((item3, i3) =>
                                                                    <h5 key={i3}>{item3}</h5>
                                                                )
                                                            }
                                                        </React.Fragment>
                                                    )
                                                }
                                            </ol>
                                        </div>
                                    </li>
                                    <h5>{item.text}</h5>
                                </React.Fragment>)

                        }
                    </ol>
                </div>
            </div>

        </div>
    );
}

export default InfoDetails;
