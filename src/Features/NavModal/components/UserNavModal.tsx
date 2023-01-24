import React from 'react';


export const UserNavModal = (setClicked: any) => {

    return (
        <div className='nav-modal-container' onClick={() => setClicked((prev) => !prev)}>
            <ul>
                <li>
                    <button>
                        <a>

                            {/* TODO add svg for span */}
                            <span> Account </span>
                            <span></span>
                        </a>
                    </button>
                </li>
                <li>
                    <button>
                        <a>
                            <span> Profile </span>
                        </a>

                    </button>

                </li>
                <li>
                    <button>
                        <a>
                            <span> Settings </span>
                        </a>

                    </button>

                </li>
                <li>
                    <button>
                        <a>
                            Log out
                        </a>
                    </button>
                    <span></span>
                </li>
            </ul>
        </div>
    );
}

