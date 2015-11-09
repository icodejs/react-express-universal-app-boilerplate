
import React from 'react';
import Layout from './layout';
import MyHeader from '../components/head.react';

export default class extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                <div className="home">
                    <MyHeader />
                    {Object.keys(this.props.dependencies).map((val, index) => {
                        return (
                            <p key={index}>
                                {val}
                            </p>
                        );
                    })}
                </div>
            </Layout>
        );
    }
}