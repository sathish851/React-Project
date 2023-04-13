import { motion} from "framer-motion";
import './notes.css'

const Notes = () =>{
    return(
        <motion.div className="notes-body notes-flex-row">
            <motion.div className="notes-left">
                <div className="notes-left-box">
                    <div className="notes-left-box-top">
                        <div className="notes-left-box-content">
                            <textarea className="notes-left-box-input"></textarea>
                            <div className="notes-left-box-text"> Interest </div>
                        </div>
                        <div className="notes-left-box-content">
                            <textarea className="notes-left-box-input"></textarea>
                            <div className="notes-left-box-text"> Motivation </div></div>
                        <div className="notes-left-box-content">
                            <textarea className="notes-left-box-input"></textarea>
                            <div className="notes-left-box-text"> Goals </div>
                            </div>
                    </div>
                    <div className="notes-left-box-top">    
                        <div className="notes-left-box-content">
                            <textarea className="notes-left-box-input"></textarea>
                            <div className="notes-left-box-text"> Today Goal </div>
                        </div>
                        <div className="notes-left-box-content">
                            <textarea className="notes-left-box-input"></textarea>
                            <div className="notes-left-box-text"> Sarcastic </div>
                        </div>
                        <div className="notes-left-box-content">
                            <textarea className="notes-left-box-input"></textarea>
                            <div className="notes-left-box-text"> Interest </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div className="notes-right">

            </motion.div>
        </motion.div>
    );
}

export default Notes;