import React from 'react';

function Home() {
    return (
        <div style={styles.container}>
            <h1>Welcome to the Home Page</h1>
            <p>This is a protected route. Only accessible to authenticated users.</p>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f7f9fc',
    },
};

export default Home;