import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faChess } from '@fortawesome/free-solid-svg-icons';
export default function Aboutus() {
    return (
        <div className="Aboutus">
            <div className="Aboutus--text">
                <h2>

                    About Us
                </h2>
                <p>

                    Problems trying to resolve the conflict between<br />
                    the two major realms of Classical physics: Newtonian mechanics
                </p>
            </div>

            <div className="Aboutus--row">
                <div>
                    <img className="Aboutus--media" src="https://media.istockphoto.com/vectors/black-flat-video-player-bar-template-for-your-design-trendy-minimal-vector-id952042324?k=20&m=952042324&s=612x612&w=0&h=MzxVmSbcCvctQuiurHn8BUU4XkF4h-FKcKJx8fAv-GU=" alt="aboutus-img"></img>
                </div>
                <div className="Aboutus--Details">
                    <div>
                        <h3>
                            Most  trusted in our field
                        </h3>
                        <p>
                            Most calendars are designed for teams. Slate<br />
                            is designed for freelancers who want a<br />
                            simple way to plan their schedule.
                        </p>
                    </div>
                    <div className="Aboutus--flexRow">
                        <FontAwesomeIcon className="Aboutus--icon" icon={faSave} size="1x"></FontAwesomeIcon>
                        <div>
                            <h6>
                                the quick fox jumps over the <br/> lazy dog
                            </h6>

                        </div>
                    </div>
                    <div className="Aboutus--flexRow">
                        <FontAwesomeIcon className="Aboutus--icon" icon={faChess} size="1x"></FontAwesomeIcon>
                        <div>

                            <h6>
                                the quick fox jumps over the <br/> lazy dog
                            </h6>
                            <p>
                                Things on a very small scale ...</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
