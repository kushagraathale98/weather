import React from 'react';

class Form extends React.Component{
    render(){
        return(
            <div>
                <form onSubmit={this.props.getWeather}>
                    <input type="text" name="city" placeholder="city"/>
                    <input type="text" name="country" placeholder="country"/>
                    <button >Get Weather</button>
                </form>
            </div>
        )
    }
}
export default Form;