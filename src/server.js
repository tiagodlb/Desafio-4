import app from './app.js'

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`${styleText("bold", "Running on port")} ${PORT}`);
});