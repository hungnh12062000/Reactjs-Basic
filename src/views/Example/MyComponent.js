import React from 'react';

class MyComponent extends React.Component {
     // State là những data có thê bị thay đổi. Khi state thay đổi thì UI sẽ được render lại
     state = {
          name: 'Hai Hung',
          age: '22'
     }

     // update state
     hanleOnchange = (event) => {
          this.setState({
               name: event.target.value
          })
     }

     //click button
     handleClickButton = () => {
          alert('Click me!');
     }

     render() {
          return (
               //output
               <>
                    <div className="first">
                         <input type="text" value={this.state.name} onChange={(event) => { this.hanleOnchange(event) }} />
                         <div className="name">{this.state.name}</div>
                    </div>
                    <div className="second">
                         <button onClick={() => this.handleClickButton()}>click me!</button>
                    </div>
               </>
          )
     }
}

// export { MyComponent };
export default MyComponent;