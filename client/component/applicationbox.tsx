import * as React from "react";

interface AppBoxProps {
    app: object,
    key: string
}

const ApplicationBox = (props: AppBoxProps) => {
    const app = props.app;
    return ( 
        <div>
            hello
        </div>
     );
}
 
export default ApplicationBox;