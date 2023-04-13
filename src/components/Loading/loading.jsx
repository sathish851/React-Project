    import './loading.css';
    const Loading = ()=>{
        
        return(
            <div className="loading">
                <img src={require('./Ghostbgrm.png')}></img>
                <div id="dashing_line">
                    <div>
                        <svg width="210" height="5" viewBox="0 0 183 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="2.5" y1="2.5" x2="180.5" y2="2.5" stroke="white" stroke-width="5" stroke-linecap="square"/>
                        
                        </svg>
                    </div>
                    <div id="center_dash_loading">
                        <svg width="183" height="5" viewBox="0 0 183 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="2.5" y1="2.5" x2="180.5" y2="2.5" stroke="white" stroke-width="5" stroke-linecap="square"/>
                        </svg>
                    </div>    

                    <div>
                        <svg width="183" height="5" viewBox="0 0 183 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="2.5" y1="2.5" x2="180.5" y2="2.5" stroke="white" stroke-width="5" stroke-linecap="square"/>
                        </svg>
                    </div>    
                    

                </div>
                
            </div>
        );
    }
    export default Loading