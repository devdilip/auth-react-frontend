import * as React from 'react';

import './Footer.css';

export interface Props { }

const AppFooter = (props: Props) => {
    return (
        <footer>
            <p className="copyright text-center">
                © {(new Date()).getFullYear()} User Application
            </p>
        </footer>
    );
};

export default AppFooter;