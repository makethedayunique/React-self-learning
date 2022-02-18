# Like and Dislike button to operate number increase and decrease

##### Learned

- Initial state and setState need to be in form of dictionary
  
  ```javascript
          this.state = {
              likeC: 100,
              dislikeC: 25,
              likeClass: "like-button",
              dislikeClass: "dislike-button"
          }
          
          // Set state function
          this.setState({
                  likeC: this.state.likeC - 1,
                  likeClass: 'like-button'
              });
  ```

- Remember to bind a function to "this"
  
  ```javascript
      // This is a way to bind function to this
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
  ```


