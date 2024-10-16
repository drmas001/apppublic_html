import fs from 'fs';
import path from 'path';
import archiver from 'archiver';

const output = fs.createWriteStream(path.join(process.cwd(), 'patient-management-app.zip'));
const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level.
});

output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log('archiver has been finalized and the output file descriptor has closed.');
});

archive.on('error', function(err) {
  throw err;
});

archive.pipe(output);

// Add the source files
archive.directory('src/', 'src');

// Add specific files from the root
archive.file('package.json', { name: 'package.json' });
archive.file('.env', { name: '.env' });
archive.file('vite.config.js', { name: 'vite.config.js' });
archive.file('index.html', { name: 'index.html' });

// Finalize the archive (ie we are done appending files but streams have to finish yet)
archive.finalize();