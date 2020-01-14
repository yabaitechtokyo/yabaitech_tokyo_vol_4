const fs = require('fs');
const shell = require('shelljs');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

shell.cd('__test__');

const compileSatyToPdf = (filename) => {
  const code = shell.exec(`satysfi ${filename}.saty`, {silent: false}).code;

  expect(code).toBe(0);
}

const convertPdfToPng = (filename) => {
  shell.mkdir('-p', 'tmp');
  const command = `gs`
  + ` -DBATCH -dNOPAUSE -sDEVICE=png16m -r144`
  + ` -dTextAlphaBits=4 -dGraphicsAlphaBits=4`
  + ` -sOutputFile=tmp/${filename}-%02d.png`
  + ` ${filename}.pdf `;
  const code = shell.exec(command, {silent: true}).code

  expect(code).toBe(0);
}

const getImagePaths = (filename) => {
  const command = `find . -regex '\./tmp/${filename}-[0-9][0-9]\\.png'`;
  return shell.exec(command, {silent: true}).stdout
    .split(/\n/)
    .filter((path) => !!path)
    .sort();
}

const compileSatyToImages = (filename) => {
  compileSatyToPdf(filename);
  convertPdfToPng(filename);

  return getImagePaths(filename).map((imagePath) => {
    return fs.readFileSync(imagePath);
  })
}

afterAll(() => {
  shell.rm('test.pdf', 'test.satysfi-aux', 'tmp/*');
})

test('Confirm that satysfi is installed', () => {
  expect(shell.exec('satysfi -v').code).toBe(0);
})

test(`Compile class file`, async (done) => {
    const images = await compileSatyToImages(`test`);
    
    expect(images.length).toMatchSnapshot();
    for (image of images) {
      expect(image).toMatchImageSnapshot();
    }
    
    done();
});
