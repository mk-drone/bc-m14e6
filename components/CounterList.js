let CounterList = React.createClass({
    render: function(){
        return React.createElement('div', {className: 'counterList'}, 
            React.createElement(Counter),
            React.createElement(Counter),
            React.createElement(Counter),
            React.createElement(Counter)
        )
    }
});