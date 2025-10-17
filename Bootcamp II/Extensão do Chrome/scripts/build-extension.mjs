import fs from 'node:fs';
import path from 'node:path';
import archiver from 'archiver';

const dist = 'dist';
const src = 'src';
const iconDir = 'icon';

// 1. Limpa o diretório de build antigo
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

// 2. Copia os arquivos da estrutura 'src' para 'dist'
const filesToCopy = {
  // Destino em 'dist' -> Origem no projeto
  'popup.html': path.join(src, 'popup', 'popup.html'),
  'popup.js': path.join(src, 'popup', 'popup.js'),
  'styles.css': path.join(src, 'popup', 'styles.css'),
  'service_worker.js': path.join(src, 'background', 'service_worker.js')
};

// Copia o manifest da raiz
fs.copyFileSync('manifest.json', path.join(dist, 'manifest.json'));

// Copia os arquivos da extensão
for (const [dest, source] of Object.entries(filesToCopy)) {
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, path.join(dist, dest));
  } else {
    // Aviso para arquivos que não existem, como styles.css
    console.warn(`Aviso: Arquivo de origem não encontrado: ${source}`);
  }
}

// 3. Copia a pasta de ícones inteira para dentro de 'dist'
if (fs.existsSync(iconDir)) {
  fs.cpSync(iconDir, path.join(dist, iconDir), { recursive: true });
}

// 4. Compacta o conteúdo de 'dist' em extension.zip
const zipPath = path.join(dist, 'extension.zip');
const output = fs.createWriteStream(zipPath);
const archive = archiver('zip', { zlib: { level: 9 } });

await new Promise((resolve, reject) => {
    output.on('close', resolve);
    archive.on('error', reject);
    archive.pipe(output);
    // Adiciona todo o conteúdo de 'dist' ao zip, exceto o próprio zip
    archive.directory(dist, false, { ignore: ['extension.zip'] });
    archive.finalize();
});

console.log(`Extensão empacotada em ${zipPath}, tamanho: ${archive.pointer()} bytes.`);