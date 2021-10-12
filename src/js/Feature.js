import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChartLine,
    faSearchDollar,
    faChartPie,
    faMoneyCheck,
    faHandHoldingUsd,
    faUserTie,
} from '@fortawesome/free-solid-svg-icons';
export default function Feature() {

    return (
        <div className="Feature">
            <div className="Feature--Text">
                <h2>
                    Better Strategy With Quality Business
                </h2>
                <p>
                    Problems trying to resolve the conflict between<br />
                    the two major realms of Classical physics: Newtonian mechanics
                </p>
            </div>
            <div className="Feature--Details">
                <div className="Feature--Details--card">
                    <FontAwesomeIcon className="Feature--Details--card--icon" icon={faChartLine} size='3x'></FontAwesomeIcon>

                    <div className="Feature--Details--card--text">
                        <h5>
                            Investment Trading
                        </h5>
                        <p>the quick fox jumps over the lazy dog</p>
                    </div>
                </div>
                <div className="Feature--Details--card">
                    <FontAwesomeIcon className="Feature--Details--card--icon" icon={faSearchDollar} size='3x'></FontAwesomeIcon>

                    <div className="Feature--Details--card--text">
                        <h5>
                            Raising Funds
                        </h5>
                        <p>the quick fox jumps over the lazy dog</p>
                    </div>
                </div>
                <div className="Feature--Details--card">
                    <FontAwesomeIcon className="Feature--Details--card--icon" icon={faChartPie} size='3x'></FontAwesomeIcon>
                    <div className="Feature--Details--card--text">
                        <h5>
                            Financial Analysis
                        </h5>
                        <p>the quick fox jumps over the lazy dog</p>
                    </div>
                </div>
                <div className="Feature--Details--card">
                    <FontAwesomeIcon className="Feature--Details--card--icon" icon={faMoneyCheck} size='3x'></FontAwesomeIcon>
                    <div className="Feature--Details--card--text">
                        <h5>
                            Texation Planning
                        </h5>
                        <p>the quick fox jumps over the lazy dog</p>
                    </div>
                </div>
                <div className="Feature--Details--card">
                    <FontAwesomeIcon className="Feature--Details--card--icon" icon={faHandHoldingUsd} size='3x'></FontAwesomeIcon>
                    <div className="Feature--Details--card--text">
                        <h5>
                            Save money and time
                        </h5>
                        <p>the quick fox jumps over the lazy dog</p>
                    </div>
                </div>
                <div className="Feature--Details--card">
                    <FontAwesomeIcon className="Feature--Details--card--icon" icon={faUserTie} size='3x'></FontAwesomeIcon>
                    <div className="Feature--Details--card--text">
                        <h5>
                            Outsourced Consulting
                        </h5>
                        <p>the quick fox jumps over the lazy dog</p>
                    </div>
                </div>

            </div>

        </div>
    )
}