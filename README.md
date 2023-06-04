# Redux (with React) Learning: Following the CODEVOLUTIONS'S playlist 

This project is about learning how to use Redux with the React projects. I'm following [Codevolution's](https://www.youtube.com/@Codevolution) (an Youtube channel) [React Redux Tutorial](https://youtube.com/playlist?list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK) playlist.


## What have I done?

### 1. Created a folder

Created a folder named "001_REDUX_DEMO_CODEVOLUTION" in one of the drive (in windows it's C, D or E drive || in Ubuntu (linux) it's Volume).


### 2. Opened folder with VS Code
**[N.B]**. I've already downloaded **VS Code** in my computer (with other **Extensions (like- prettier)**). That's why I didn't need to do that again.

1. In my Ubuntu-> Right-clicked into the folder and there was a prompt/dialog with different options. One of the options is "Open with Other Application".

2. Clicked into the option and there was another prompt/dialog with different Application/Software names in it. One of them is "Visual Studio Code".

3. Selected the application name. That's it!

4. (May be) After opening with VS Code-> there may be a prompt/dialog with showing "Do you trust the author". In my case I've selected the "yes" related option.


### 3. Open terminal and initialize node project

**[N.B]**. I've already downloaded **Node** in my computer (with other environment related things like- **npm/npx** etc.). That's why I didn't need to do that again.

1. After opening VS Code I've pressed **Ctrl + `** keys and a terminal has been opened in the bottom side of the screen.

2. The termianal was expecting me to write something. The line was started like-> **<my-computer-name>/<path-to-the-project>/001_REDUX_DEMO_CODEVOLUTION$**

3. Next to this line I've typed **npm init --yes** and pressed **Enter** key. Right after that -> a file has been created with name **package.json**

4. After that, I've typed **npm install redux** and pressed **Enter** key. Right after that-> **node_modules** folder and **package-lock.json** file has been created. [**N.B.** keep in mind to keep your internet-connection open. Because the command will download the Redux and then install it.]


### 4. Initialize GIT (version control system)

1. In the terminal-> typed **git init** and pressed **Enter** key. This has created a blank git repository for this folder.

2. Then created a **.gitignore** file and written-> "node_modules/" into it. Then saved the file by pressing **Ctrl + S** keys

3. In the terminal-> typed **git add .** command and pressed **Enter** key. This has added all the files except the files of "node_modules/" folder into git.

4. In the terminal-> again typed **git status** to see the latest update of the git repo. It showed the list files which have been added into the repository

5. In the terminal-> typed **git commit -a -m "initial commit"** and pressed **Enter** key. It was the first commit of the repository with the message "initial commit"

6. In the GitHub.com, created a brand new git repository and copied the HTTPS link of the repository.

7. In the terminal-> typed **git remote add origin <https-link-of-remote-git-repo>** command and pressed **Enter** key. It has added the GitHub repo as the remote repository of this local git repo 

8. In the terminal-> typed **git push origin master** command to push my latest code into the **master branch** of the remote git repository.


### 5. Test the output

1. in the ""001_REDUX_DEMO_CODEVOLUTION"" folder, created a file named **index.js**

2. written **console.log("From INDEX.JS")** into the file and pressed **Ctrl + S** to save the code

3. In the terminal-> typed **node index.js** and pressed **Enter** key.

4. In the terminal, there is an output-> **From INDEX.JS**