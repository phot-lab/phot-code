## PhotCodeXT

### 如何安装插件？

- 安装 vscode ^1.46.0 软件
- 在 PhotCodeXT-1.0.1.vsix 文件目录下运行命令行窗口(使用 code 命令，不指定路径会在默认在当前目录下找)
- 运行命令：code --install-extension PhotCodeXT-1.0.1.vsix
  - code --install-extension <ext-id | path> ： Installs or updates an extension. The argument is either an extension id or a path to a VSIX.
- 安装成功后能够在本地路径：C:\Users\18703.vscode\extensions 找到对应插件（路径中的用户名注意更换）

![插件运行截图 ：https://github.com/Neo-trin/pics/blob/main/1681221398473.png](https://github.com/Neo-trin/pics/blob/main/1681221398473.png)

### 如何运行插件？

- 打开 vscode
- 使用快捷键：ctrl + shift + x
  - 打开扩展仓库，在扩展仓库已安装中找到名为 PhotCodeXT 的插件；
  - 点击该插件查看插件相关信息；
  - 查看插件是否被禁用(默认是没被禁用的)；
- 点击左侧的PhotCodeXt图标即可激活插件。

## 插件功能

- [x] 创建空的python工程。
- [x] 打开python工程文件。
- [x] 检测python环境是否安装。
- [x] 自动安装python环境。
- [x] 自动安装本插件所依赖的python插件。
- [ ] 自动安装计算引擎与底层运算库，需要自己pip装一下。
- 未完成自动安装计算引擎与底层运算库，需要自己pip装一下。
- etc

### 如何使用该插件开发python代码

1.  创建空白python工程。
2.  检查并配置本机python环境。
3.  在该工程文件中编写代码。
4.  调用底层运算库或者计算引擎提供的接口，完善代码以及测试代码。

如下：

qam_modulate_v1.py

```python
# qam_modulate_v1.py : 用户编写的光组件代码
def qam_modulate(bits, bits_per_symbol):
    """QAM modulate

    Args:
        data_x (np.ndarray): signal x
        data_y (np.ndarray): signal y
        bits_per_symbol (int/float): Bits per symbol
    """
    print("两列随机二进制序列：")
    print(bits)
    print("调制格式：" + " 4 for 16QAM")
# test_qam_modulate_v1.py : 用户使用底层运算库或者计算引擎测试光组件代码
import phot
import qam_modulate_v1
num_symbols = 2**16
bits_per_symbol = 4
bits = phot.gen_bits(num_symbols * bits_per_symbol)
qam_modulate_v1.qam_modulate(bits, bits_per_symbol)
```



## 运行源码

```bash
# Copy sample extension locally
git clone -b dev git@gitee.com:opticalab_1/PhotCodext.git

# Navigate into sample directory
cd PhtoCodeXT

# Install dependencies for both the extension and webview UI source code
npm run install:all

# Build webview UI source code
npm run build:webview

# Open sample in VS Code
code .
```

Once the sample is open inside VS Code you can run the extension by doing the following:

1. Press `F5` to open a new Extension Development Host window