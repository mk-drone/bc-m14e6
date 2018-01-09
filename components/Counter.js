let Counter = React.createClass({
    //init
    getInitialState: function(){
        console.log('getInitialState: ustaw domyslny stan komponentu')
        return {
            counter: 0
        };
    },

    getDefaultProps: function(){
        console.log('getDefaultProps: ustaw domyslne wartosci propsow');
    },
    
    componentWillMount: function(){
        console.log('componentWillMount: ?');
    },

    componentDidMount: function(){
        console.log('componentDidMount: wykonaj akcje ktora zalezy od pojawienia się komponentu');
    },

    //update
    componentWillReceiveProps: function(nextProps){
        console.log('componentWillReceiveProps: ?', nextProps);
    },

    shouldComponentUpdate: function(nextProps, nextState){
        console.log('shouldComponentUpdate: samodzielne potwierdzenie aktualizacji komponentu',nextProps, nextState);
        return true;
    },

    componentWillUpdate: function(nextProps, nextState){
        console.log('componentWillUpdate: ?');
    },

    componentDidUpdate: function(prevProps, prevState){
        console.log('componentDidUpdate: informowanie rodzica o powodzeniu aktualizacji?');
    },

    //delete
    componentWillUnmount: function(prevProps, prevState){
        console.log('componentWillUnmount: ?');
    },

    increment: function(){
        this.setState({
            counter: this.state.counter+1
        });
    },

    decrement: function(){
        this.setState({
            counter: this.state.counter-1
        });
    },

    render: function(){
        return React.createElement('div', {}, 
            React.createElement('p',{},
                React.createElement('span', {}, `Licznik: ${this.state.counter}`),
                React.createElement('button', {onClick: this.increment}, "+"),
                React.createElement('button', {onClick: this.decrement}, "-"),
            )   
        );
    }
})