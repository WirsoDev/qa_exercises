import './Finish.css'

function Finish(props) {
    return (
        <div className="finish">
            <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 8.31003C16.64 7.90003 16.27 7.49003 15.88 7.10003L15.59 6.83003L15.73 6.71003C16.2191 6.29023 16.5676 5.73054 16.7285 5.10646C16.8894 4.48239 16.8551 3.82396 16.63 3.22003C16.3039 2.539 15.7876 1.96696 15.1435 1.57301C14.4993 1.17906 13.7549 0.98005 13 1.00003V3.00003C13.3558 2.99507 13.7065 3.08513 14.0159 3.26092C14.3253 3.4367 14.5822 3.69185 14.76 4.00003C14.93 4.40003 14.76 4.84003 14.29 5.31003C14.22 5.39003 14.14 5.44003 14.07 5.51003C11.07 3.10003 7.78004 1.74003 6.17004 3.35003C6.0014 3.52242 5.86281 3.72185 5.76004 3.94003V4.04003L5.58004 4.57003L1.17004 17.67C1.00323 18.1637 0.95644 18.69 1.03354 19.2053C1.11064 19.7207 1.30941 20.2102 1.61339 20.6335C1.91737 21.0567 2.31781 21.4014 2.78155 21.6391C3.24528 21.8767 3.75896 22.0004 4.28004 22C4.62028 21.9967 4.95783 21.9393 5.28004 21.83L19 17.28C19.1687 17.2173 19.3172 17.1102 19.43 16.97L19.64 16.79C21.07 15.35 20.15 12.58 18.23 9.89003C19.3701 9.22468 20.6828 8.91478 22 9.00003V7.00003C20.2374 6.90304 18.4887 7.3612 17 8.31003V8.31003ZM4.70004 19.93C4.47305 20.0052 4.22964 20.0157 3.99699 19.9605C3.76435 19.9054 3.55161 19.7866 3.38254 19.6175C3.21347 19.4485 3.09471 19.2357 3.03953 19.0031C2.98435 18.7704 2.99491 18.527 3.07004 18.3L4.43004 14.2C5.40063 16.0509 6.892 17.5771 8.72004 18.59L4.70004 19.93ZM11.7 17.6C10.1888 17.1998 8.81013 16.4072 7.70378 15.3026C6.59743 14.198 5.80268 12.8207 5.40004 11.31L6.40004 8.31003L6.46004 8.40003C6.57004 8.62003 6.71004 8.85003 6.85004 9.08003C6.99004 9.31003 7.01004 9.37003 7.11004 9.52003C7.21004 9.67003 7.44004 10 7.62004 10.25C7.80004 10.5 7.81004 10.53 7.92004 10.67C8.03004 10.81 8.35004 11.22 8.58004 11.49L8.87004 11.84C9.21004 12.23 9.57004 12.61 9.95004 13C10.33 13.39 10.63 13.64 10.95 14L11.28 14.28L12.06 14.91L12.43 15.19C12.71 15.39 12.98 15.59 13.26 15.77L13.57 15.97C13.93 16.19 14.29 16.4 14.64 16.58H14.69L11.7 17.6ZM18.21 15.37H18.15C17.46 15.75 14.59 14.8 11.36 11.56C11.02 11.22 10.7 10.89 10.41 10.56L10.12 10.21L9.59004 9.57003L9.30004 9.17003C9.17004 8.98003 9.03004 8.80003 8.91004 8.62003L8.65004 8.20003L8.36004 7.73003C8.28004 7.59003 8.22004 7.46003 8.15004 7.33003C8.08004 7.20003 8.00004 7.07003 7.94004 6.93003C7.88641 6.81285 7.83966 6.69265 7.80004 6.57003C7.75004 6.44003 7.69004 6.31003 7.65004 6.19003C7.61004 6.07003 7.60004 6.00003 7.57004 5.88003C7.54004 5.76003 7.52004 5.66003 7.50004 5.56003C7.49505 5.47343 7.49505 5.38662 7.50004 5.30003C7.49041 5.22032 7.49041 5.13974 7.50004 5.06003L7.61004 4.75003C7.97004 4.39003 9.84004 4.75003 12.34 6.65003C11.9163 6.84129 11.4632 6.95962 11 7.00003V9.00003C12.0623 8.93893 13.0929 8.616 14 8.06003L14.48 8.52003C14.9 8.94003 15.29 9.37003 15.66 9.80003C15.0876 10.8351 14.8765 12.0315 15.06 13.2L17.06 12.81C17.0011 12.439 17.0011 12.061 17.06 11.69C17.3652 12.1528 17.636 12.6375 17.87 13.14C18.43 14.46 18.39 15.2 18.21 15.37V15.37Z" fill="black" />
            </svg>
            <h2>Hello {props.data[0]}</h2>
            <p>You need a {props.data[1]} named {props.data[2]}!!</p>
            <button onClick={props.close}>Not sure about that?</button>
        </div>
    )
}

export default Finish