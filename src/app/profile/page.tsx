import React from 'react';
import {getServerSession} from "next-auth";

const Page = async () => {
    const session = await getServerSession()
    return (
        <div>
            <h1>profile of<span>{session?.user?.name}</span></h1>
        </div>
    );
};

export default Page;