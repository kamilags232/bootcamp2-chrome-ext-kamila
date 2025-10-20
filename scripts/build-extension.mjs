import fs from 'node:fs';
import path from 'node:path';
import archiver from 'archiver';

const dist = 'dist';

// remove dist se existir
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

// Copia arquivos essenciais: manifest.json
const essentialFiles = ['manifest.json'];
for (const f of essentialFiles) {
  if (fs.existsSync(f)) {
    fs.copyFileSync(f, path.join(dist, f));
  } else {
    console.warn(`[build-extension] Aviso: ${f} não encontrado.`);
  }
}

// Copia pastas que normalmente existem
if (fs.existsSync('src')) {
  fs.cpSync('src', path.join(dist, 'src'), { recursive: true });
}
if (fs.existsSync('icons')) {
  fs.cpSync('icons', path.join(dist, 'icons'), { recursive: true });
}

// Se tiver docs (opcional)
if (fs.existsSync('docs')) {
  fs.cpSync('docs', path.join(dist, 'docs'), { recursive: true });
}

// Gera ZIP (somente os arquivos dentro de dist)
const output = fs.createWriteStream(path.join(dist, 'extension.zip'));
const archive = archiver('zip', { zlib: { level: 9 } });

archive.pipe(output);

// Adiciona conteúdo do dist (não inclui o próprio extension.zip)
archive.directory(dist, false);

// remover extension.zip caso entre recursivamente (por segurança)
archive.finalize().then(() => {
  console.log('Build gerado em dist/ e dist/extension.zip');
}).catch((err) => {
  console.error('Erro ao finalizar ZIP:', err);
});
