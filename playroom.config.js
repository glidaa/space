const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  components: './src/components/index.tsx',
  outputPath: './playroom',
  exampleCode: `
  <HeaderPlayRoom
  logo=""
  colorScheme=""
  text=""
  onClick={() => console.log("Header clicked!")}
  onButtonClick={() => console.log("Welcome button clicked!")}
/>
<MakeComplaint
  buttonProps={{
    onClick: () => console.log("Custom button clicked!"),
  }}
  selectProps={{
    placeholder: "Custom Placeholder",
  }}
  textAreaProps={{
    placeholder: "Custom Text Area Placeholder",
  }}
/>
<PleaseProvider
  firstName=""
  lastName=""
  phone=""
  email=""// correo
  role="" // Puedes cambiar a 'option2' si es necesario
  incidentLocation="" // Puedes cambiar a 'option2' si es necesario
  personWithDisabilityName="Jane Doe"
  communicationMethod="yes" // Puedes cambiar a 'no' si es necesario
  onInputChange={(inputName, value) => console.log("")} // Puedes proporcionar tu propia función
  onRadioChange={(radioName, value) => console.log("")} // Puedes proporcionar tu propia función
  titles={{
    mainTitle: '',
    subTitle: '',
  }}
/>
<PleaseProvideDetails
  providerName="John Doe"
  stateTerritory="Restrictive practice"
  complaintDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  spokenToProvider="yes"
  onInputChange={(inputName, value) => console.log("")}
  onRadioChange={(radioName, value) => console.log("")}
  buttonColors={{ backgroundColor: '#275D3A', color: '#FFFFFF' }}
  onButtonClick={() => console.log('Button clicked!')}
/>
<Footer
  links={[
    { name: 'Accessibility', onClick: () => handleLinkClick('Accessibility') },
    { name: 'Copyright', onClick: () => handleLinkClick('Copyright') },
    // ... otros enlaces ...
  ]}
  onModalOpen={(name) => handleModalOpen(name)}
  onModalClose={() => handleModalClose()}
  modalBackground=""
/>
  `,
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: path.resolve(__dirname, 'src'),
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
              },
            },
          ],
        },
        {
          test: /\.css$/,
          include: path.resolve(__dirname, 'src'),
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(svg|png|jpg)$/,
          use: ['file-loader'],
        },
        // Regla para los archivos CSS de Semantic UI
        {
          test: /\.css$/,
          include: path.resolve(__dirname, 'node_modules/semantic-ui-css'),
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
    plugins: [
      // Plugin para extraer CSS en archivos separados
      new MiniCssExtractPlugin(),
    ],
  }),
};
