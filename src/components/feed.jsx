define([
    'react',
    'jquery',
    'pouchdb'
], function (React, PouchDB, jquery) {
    var Feed = React.createClass({
        getInitialState: function() {
            return {feedUrl: ''};
        },

        onChange: function (e) {
            this.setState({feedUrl: e.target.value});
        },

        onSubmit: function (e) {
            e.preventDefault();

            // @TODO: Store event in PouchDB
            console.log("Store " + this.state.feedUrl);
            this.setState({feedUrl: ""});
        },

        render: function() {
            return (
                <div>
                     <form onSubmit={this.onSubmit}>
                        <input onChange={this.onChange} value={this.state.feedUrl} />
                        <button>Add</button>
                    </form>
                </div>
            );
        }
    });

    React.render(<Feed />, $(".timer")[0]);
});
