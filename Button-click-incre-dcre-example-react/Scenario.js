import cx from 'classnames';
import { Component } from 'react';

export default class LikeDislike extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likeC: 100,
            dislikeC: 25,
            likeClass: "like-button",
            dislikeClass: "dislike-button"
        }
    }

    likeClick = () => {
        // Check if likedClass contains liked
        if (this.state.likeClass.includes("liked")) {
            this.setState({
                likeC: this.state.likeC - 1,
                likeClass: 'like-button'
            });
        } else {
            // It is not liked now
            // Update liked first
            this.setState({
                likeC: this.state.likeC + 1,
                likeClass: 'like-button liked'
            });
            // Check if dislike button needs to be updated
            if (this.state.dislikeClass.includes("disliked")) {
                this.setState({
                    dislikeC: this.state.dislikeC - 1,
                    dislikeClass: 'dislike-button'
                });
            }
            // Otherwise no need to update
        }
    }

    dislikeClick = () => {
        // Check if dislikeClass contains disliked
        if (this.state.dislikeClass.includes("disliked")) {
            this.setState({
                dislikeC: this.state.dislikeC - 1,
                dislikeClass: 'dislike-button'
            });
        } else {
            // It is not disliked now
            // Update disliked first
            this.setState({
                dislikeC: this.state.dislikeC + 1,
                dislikeClass: 'dislike-button disliked'
            });
            // Check if like button needs to be updated
            if (this.state.likeClass.includes("liked")) {
                this.setState({
                    likeC: this.state.likeC - 1,
                    likeClass: 'like-button'
                });
            }
            // Otherwise no need to update
        }
    }


    render() {
        return (
            <>
                <div>
                    <h2>Like/Dislike</h2>
                    <button onClick={this.likeClick} className={this.state.likeClass}>Like | <span className="likes-counter">{this.state.likeC}</span></button>
                    <button onClick={this.dislikeClick} className={this.state.dislikeClass}>Dislike | <span className="dislikes-counter">{this.state.dislikeC}</span></button>
                </div>
                <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}</style>
            </>
        );
    }
}
