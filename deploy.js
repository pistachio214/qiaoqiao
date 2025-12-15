const fs = require('fs-extra');
const path = require('path');

const deploy = async () => {
    try {
        console.log('开始部署准备...');

        // 确保 standalone 目录存在
        const standaloneDir = path.join('.next', 'standalone');
        await fs.ensureDir(standaloneDir);

        // 复制 static 目录
        const staticSource = path.join('.next', 'static');
        const staticDest = path.join(standaloneDir, '.next', 'static');
        if (await fs.pathExists(staticSource)) {
            await fs.copy(staticSource, staticDest);
            console.log('已复制 static 目录');
        }

        // 复制 public 目录
        const publicSource = 'public';
        const publicDest = path.join(standaloneDir, 'public');
        if (await fs.pathExists(publicSource)) {
            await fs.copy(publicSource, publicDest);
            console.log('已复制 public 目录');
        }

        console.log('部署准备完成！');
        console.log('运行命令: npm run start');

    } catch (error) {
        console.error('部署失败:', error);
        process.exit(1);
    }
}

deploy();