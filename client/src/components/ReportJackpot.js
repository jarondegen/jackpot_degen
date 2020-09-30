import React from 'react';

const ReportJackpot = (props) => {
    console.log(props)
    return (
        <>
            <h4>Report A Jackpot</h4>
            <form>
                <select>
                    {/*props.roomNames.map(room =>
                        <option>{room}</option>    
                    )*/}
                </select>
            </form>
        </>
    );
};

export default ReportJackpot