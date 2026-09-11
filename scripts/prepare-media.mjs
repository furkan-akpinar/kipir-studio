import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import ffmpeg from 'ffmpeg-static';

const sources = [ ['sokakta',4568], ['gece-vardiyasi',42421], ['bir-yudum',41228], ['renk-pazari',1971], ['acik-hava',4185], ['ilk-adim',4851] ];
await mkdir('public/media', { recursive: true });
await mkdir('tmp/originals', { recursive: true });
for (const [slug,id] of sources) {
  const original = `tmp/originals/${slug}.mp4`;
  if (!existsSync(original)) {
    const res = await fetch(`https://assets.mixkit.co/videos/${id}/${id}-720.mp4`);
    if (!res.ok || !res.headers.get('content-type')?.includes('video')) throw new Error(`${slug}: ${res.status}`);
    await writeFile(original, Buffer.from(await res.arrayBuffer()));
  }
  execFileSync(ffmpeg, ['-y','-i',original,'-t','10','-an','-vf','scale=1000:600:force_original_aspect_ratio=increase,crop=1000:600,fps=24','-c:v','libx264','-crf','25','-preset','fast','-pix_fmt','yuv420p','-movflags','+faststart',`public/media/${slug}.mp4`], { stdio: 'pipe' });
  for (const [suffix,time] of [['',.15],['-still',3]]) {
    execFileSync(ffmpeg,['-y','-ss',String(time),'-i',`public/media/${slug}.mp4`,'-frames:v','1','-q:v','3',`public/media/${slug}${suffix}.jpg`], { stdio:'pipe' });
  }
  console.log(`${slug}: video + matching poster + detail still ready`);
}
