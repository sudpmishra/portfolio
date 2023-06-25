import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars';

class CustomScrollbars extends React.Component {
    render() {
        return (
            <Scrollbars 
                onScroll={this.handleScroll}
                onScrollFrame={this.handleScrollFrame}
                onScrollStart={this.handleScrollStart}
                onScrollStop={this.handleScrollStop}
                onUpdate={this.handleUpdate}
                renderView={this.renderView}
                renderTrackHorizontal={this.renderTrackHorizontal}
                renderTrackVertical={this.renderTrackVertical}
                renderThumbHorizontal={this.renderThumbHorizontal}
                renderThumbVertical={this.renderThumbVertical}
                autoHide
                autoHideTimeout={1000}
                autoHideDuration={200}
                universal={true}
                {...this.props}>
                {this.props.children}
            </Scrollbars>
        );
    }
}

export default CustomScrollbars