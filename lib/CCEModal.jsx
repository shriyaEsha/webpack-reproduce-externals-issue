export default function CCEModal() {
    const importCCE = async () => {
        console.log('Here inside!');
        const CCEverywhere = await import('CCEverywhere');
        console.log('Dynamically imported CCEverywhere Object in CCEModal component: ', CCEverywhere);
    };

    console.log('Here outside!');
    return <button onClick={importCCE}>Import CCE via Externals!</button>;
}