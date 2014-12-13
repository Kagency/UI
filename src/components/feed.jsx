define([
    'react',
    'jquery',
    'Storage',
    'Task'
], function (React, jQuery, Storage, Task) {
    var Feed = React.createClass({
        getInitialState: function() {
            return new Task();
        },

        onChange: function (e) {
            this.setState(this.state.value = {feedUrl: e.target.value});
        },

        onSubmit: function (e) {
            e.preventDefault();

            var task = new Task({
                "type": "feed",
                "value": this.state
            });

            Storage.database.post(task.values());
            this.setState(this.state.value = {feedUrl: ""});
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
