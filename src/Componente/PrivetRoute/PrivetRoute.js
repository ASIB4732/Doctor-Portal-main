import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivetRoute = ({ children, ...rest }) => {
    const data = JSON.parse(localStorage.getItem('data'));
    console.log(data);
    return (
        <div>
        <Route
            {...rest}
            render={({ location }) =>
            ( data && data.email) ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/logIn",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
        </div>
    );
};

export default PrivetRoute;