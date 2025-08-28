// 游戏数据
const gameData = {
    players: [],
    wordPairs: [
        { word1: '双胞胎', word2: '龙凤胎' },
        { word1: '可乐', word2: '雪碧' },
        { word1: '西瓜', word2: '哈密瓜' },
        { word1: '足球', word2: '篮球' },
        { word1: '眼镜', word2: '隐形眼镜' },
        { word1: '电脑', word2: '平板' },
        { word1: '手机', word2: '座机' },
        { word1: '苹果', word2: '梨子' },
        { word1: '电影院', word2: '剧场' },
        { word1: '耳机', word2: '音箱' },
        { word1: '火锅', word2: '烧烤' },
        { word1: '跑步', word2: '散步' },
        { word1: '电梯', word2: '楼梯' },
        { word1: '微信', word2: 'QQ' },
        { word1: '笔记本', word2: '记事本' },
        { word1: '咖啡', word2: '奶茶' },
        { word1: '猫', word2: '狗' },
        { word1: '电视剧', word2: '电影' },
        { word1: '地铁', word2: '公交车' },
        { word1: '冰淇淋', word2: '雪糕' },
        { word1: '羽毛球', word2: '乒乓球' },
        { word1: '钢笔', word2: '圆珠笔' },
        { word1: '牛奶', word2: '豆浆' },
        { word1: '面包', word2: '蛋糕' },
        { word1: '医生', word2: '护士' },
        { word1: '老师', word2: '教授' },
        { word1: '飞机', word2: '高铁' },
        { word1: '酒店', word2: '民宿' },
        { word1: '超市', word2: '便利店' },
        { word1: '短信', word2: '邮件' },
        { word1: '电子书', word2: '纸质书' },
        { word1: '自行车', word2: '电动车' },
        { word1: '太阳', word2: '月亮' },
        { word1: '海洋', word2: '湖泊' },
        { word1: '春节', word2: '元旦' },
        { word1: '鼠标', word2: '触控板' },
        { word1: '键盘', word2: '打字机' },
        { word1: '电饭煲', word2: '高压锅' },
        { word1: '洗衣机', word2: '甩干机' },
        { word1: '空调', word2: '电风扇' },
        { word1: '电视', word2: '投影仪' },
        { word1: '吉他', word2: '尤克里里' },
        { word1: '钢琴', word2: '电子琴' },
        { word1: '小提琴', word2: '大提琴' },
        { word1: '鼓', word2: '锣' },
        { word1: '相机', word2: '摄像机' },
        { word1: '打印机', word2: '复印机' },
        { word1: '扫把', word2: '拖把' },
        { word1: '牙刷', word2: '牙线' },
        { word1: '毛巾', word2: '浴巾' },
        { word1: '沙发', word2: '躺椅' },
        { word1: '床', word2: '沙发床' },
        { word1: '枕头', word2: '抱枕' },
        { word1: '被子', word2: '毯子' },
        { word1: '窗帘', word2: '百叶窗' },
        { word1: '马桶', word2: '蹲便器' },
        { word1: '浴缸', word2: '淋浴间' },
        { word1: '洗手液', word2: '肥皂' },
        { word1: '洗发水', word2: '护发素' },
        { word1: '香水', word2: '古龙水' },
        { word1: '口红', word2: '唇膏' },
        { word1: '眉笔', word2: '眼线笔' },
        { word1: '粉底', word2: 'BB霜' },
        { word1: '项链', word2: '手链' },
        { word1: '耳环', word2: '耳钉' },
        { word1: '戒指', word2: '手镯' },
        { word1: '手表', word2: '怀表' },
        { word1: '皮鞋', word2: '运动鞋' },
        { word1: '高跟鞋', word2: '平底鞋' },
        { word1: '拖鞋', word2: '凉鞋' },
        { word1: '雨伞', word2: '遮阳伞' },
        { word1: '雨衣', word2: '风衣' },
        { word1: '围巾', word2: '披肩' },
        { word1: '手套', word2: '袖套' },
        { word1: '帽子', word2: '头巾' },
        { word1: '眼罩', word2: '口罩' },
        { word1: '背包', word2: '手提包' },
        { word1: '钱包', word2: '卡包' },
        { word1: '行李箱', word2: '旅行包' },
        { word1: '公文包', word2: '电脑包' },
        { word1: '铅笔', word2: '蜡笔' },
        { word1: '橡皮', word2: '修正带' },
        { word1: '尺子', word2: '三角板' },
        { word1: '订书机', word2: '打孔器' },
        { word1: '剪刀', word2: '美工刀' },
        { word1: '胶水', word2: '胶带' },
        { word1: '便利贴', word2: '书签' },
        { word1: '日历', word2: '备忘录' },
        { word1: '相册', word2: '画册' },
        { word1: '明信片', word2: '贺卡' },
        { word1: '信封', word2: '包装袋' },
        { word1: '报纸', word2: '杂志' },
        { word1: '漫画', word2: '绘本' },
        { word1: '小说', word2: '散文' },
        { word1: '诗歌', word2: '歌词' },
        { word1: '日记', word2: '游记' },
        { word1: '论文', word2: '报告' },
        { word1: '简历', word2: '自传' },
        { word1: '菜谱', word2: '食谱' },
        { word1: '说明书', word2: '使用手册' },
        { word1: '地图', word2: '导航' },
        { word1: '指南针', word2: '水平仪' },
        { word1: '望远镜', word2: '显微镜' },
        { word1: '温度计', word2: '湿度计' },
        { word1: '秤', word2: '计量杯' },
        { word1: '闹钟', word2: '沙漏' },
        { word1: '日晷', word2: '挂钟' },
        { word1: '计算器', word2: '算盘' },
        { word1: '收音机', word2: '录音机' },
        { word1: 'MP3', word2: 'CD机' },
        { word1: '游戏机', word2: '掌机' },
        { word1: '电子表格', word2: '数据库' },
        { word1: '幻灯片', word2: '文档' },
        { word1: '网页', word2: 'APP' },
        { word1: '博客', word2: '论坛' },
        { word1: '视频', word2: '直播' },
        { word1: '照片', word2: '壁纸' },
        { word1: '表情包', word2: '贴纸' },
        { word1: '头像', word2: '签名档' },
        { word1: '昵称', word2: '用户名' },
        { word1: '密码', word2: '验证码' },
        { word1: '二维码', word2: '条形码' },
        { word1: '指纹', word2: '面容识别' },
        { word1: '声纹', word2: '虹膜' },
        { word1: '签名', word2: '印章' },
        { word1: '身份证', word2: '护照' },
        { word1: '驾照', word2: '行驶证' },
        { word1: '会员卡', word2: '优惠券' },
        { word1: '发票', word2: '收据' },
        { word1: '合同', word2: '协议' },
        { word1: '证书', word2: '奖状' }
    ],
    currentRound: 0,
    currentPlayerIndex: 0,
    selectedWordPair: null,
    undercoverIndices: [], // 改为数组，存储多个卧底的索引
    votes: [],
    totalVotes: 0,
    maxVotes: 0,
    eliminatedPlayers: [],
    gameOver: false,
    currentVotingPlayerIndex: 0, // 当前正在投票的玩家索引
    votingComplete: false // 标记投票是否完成
};

// DOM元素
const setupScreen = document.getElementById('setup-screen');
const roleScreen = document.getElementById('role-screen');
const gameScreen = document.getElementById('game-screen');
const voteScreen = document.getElementById('vote-screen');
const resultScreen = document.getElementById('result-screen');
const settingsScreen = document.getElementById('settings-screen');
const settingsIcon = document.getElementById('settings-icon');
const closeSettingsBtn = document.getElementById('close-settings');

// 记录当前活动的屏幕，用于从设置界面返回
let currentActiveScreen = setupScreen;

const playerCountInput = document.getElementById('player-count');
const undercoverCountInput = document.getElementById('undercover-count');
const startGameBtn = document.getElementById('start-game');
const currentPlayerSpan = document.getElementById('current-player');
const playerWordSpan = document.getElementById('player-word');
const roleCard = document.getElementById('role-card');
const nextPlayerBtn = document.getElementById('next-player');
const startVoteBtn = document.getElementById('start-vote');
const playersList = document.getElementById('players-list');
const confirmVoteBtn = document.getElementById('confirm-vote');
const resultTitle = document.getElementById('result-title');
const resultContent = document.getElementById('result-content');
const playerRoles = document.getElementById('player-roles');
const continueGameBtn = document.getElementById('continue-game');
const newGameBtn = document.getElementById('new-game');
const civilianWordSpan = document.getElementById('civilian-word');
const undercoverWordSpan = document.getElementById('undercover-word');

// 设置图标点击事件
settingsIcon.addEventListener('click', () => {
    showScreen(settingsScreen);
});

// 关闭设置按钮点击事件
closeSettingsBtn.addEventListener('click', () => {
    // 返回到之前的活动屏幕
    showScreen(currentActiveScreen);
});

// 初始化游戏
showScreen(setupScreen);

startGameBtn.addEventListener('click', () => {
    const playerCount = parseInt(playerCountInput.value);
    const undercoverCount = parseInt(undercoverCountInput.value);
    
    if (playerCount < 3) {
        alert('参与人数至少需要3人！');
        return;
    }
    
    if (undercoverCount < 1 || undercoverCount > Math.floor(playerCount / 2)) {
        alert(`卧底人数应在1-${Math.floor(playerCount / 2)}人之间！`);
        return;
    }
    
    initGame(playerCount, undercoverCount);
    showScreen(roleScreen);
    updateRoleScreen();
});

// 翻转身份卡片
roleCard.addEventListener('click', () => {
    roleCard.classList.toggle('flipped');
});

// 下一位玩家
nextPlayerBtn.addEventListener('click', () => {
    if (roleCard.classList.contains('flipped')) {
        roleCard.classList.remove('flipped');
    }
    
    gameData.currentPlayerIndex++;
    
    if (gameData.currentPlayerIndex < gameData.players.length) {
        updateRoleScreen();
    } else {
        showScreen(gameScreen);
    }
});

// 开始投票
startVoteBtn.addEventListener('click', () => {
    prepareVoteScreen();
    showScreen(voteScreen);
});

// 确认投票
confirmVoteBtn.addEventListener('click', () => {
    // 检查是否所有玩家都已完成投票
    if (!gameData.votingComplete) {
        alert('请等待所有玩家完成投票！');
        return;
    }
    
    // 检查是否所有人都弃权
    if (gameData.totalVotes === 0) {
        // 所有玩家都弃权，继续游戏而不是重新投票
        showGameResult('全员弃权', '所有玩家都选择弃权，本轮没有人被淘汰，游戏继续！');
        return;
    }
    
    const voteCounts = countVotes();
    const maxVotes = Math.max(...voteCounts);
    const eliminatedIndices = [];
    
    voteCounts.forEach((count, index) => {
        if (count === maxVotes && !gameData.eliminatedPlayers.includes(index)) {
            eliminatedIndices.push(index);
        }
    });
    
    // 处理投票结果
    processVoteResult(eliminatedIndices);
});

// 继续游戏
continueGameBtn.addEventListener('click', () => {
    if (gameData.gameOver) {
        return;
    }
    
    gameData.currentRound++;
    showScreen(gameScreen);
});

// 新游戏
newGameBtn.addEventListener('click', () => {
    showScreen(setupScreen);
});

// 初始化游戏
function initGame(playerCount, undercoverCount) {
    gameData.players = [];
    gameData.currentRound = 0;
    gameData.currentPlayerIndex = 0;
    gameData.eliminatedPlayers = [];
    gameData.gameOver = false;
    gameData.totalVotes = 0;
    gameData.maxVotes = playerCount; // 设置最大投票数为玩家人数
    gameData.currentVotingPlayerIndex = 0; // 初始化当前投票玩家索引
    gameData.votingComplete = false; // 初始化投票完成标志
    
    // 随机选择词语对
    const randomIndex = Math.floor(Math.random() * gameData.wordPairs.length);
    gameData.selectedWordPair = gameData.wordPairs[randomIndex];
    
    // 随机决定哪个词是卧底词（word1或word2）
    const isWord1Undercover = Math.random() < 0.5;
    const undercoverWord = isWord1Undercover ? gameData.selectedWordPair.word1 : gameData.selectedWordPair.word2;
    const civilianWord = isWord1Undercover ? gameData.selectedWordPair.word2 : gameData.selectedWordPair.word1;
    
    // 使用用户指定的卧底数量
    undercoverCount = Math.min(undercoverCount, Math.floor(playerCount / 2));
    
    // 清空卧底索引数组
    gameData.undercoverIndices = [];
    
    // 随机选择卧底
    const playerIndices = Array.from({length: playerCount}, (_, i) => i);
    shuffleArray(playerIndices); // 打乱索引数组
    
    // 取前undercoverCount个作为卧底
    for (let i = 0; i < undercoverCount; i++) {
        gameData.undercoverIndices.push(playerIndices[i]);
    }
    
    // 初始化玩家（按顺序排列，不再打乱）
    for (let i = 0; i < playerCount; i++) {
        const isUndercover = gameData.undercoverIndices.includes(i);
        gameData.players.push({
            id: i,
            name: `玩家${i + 1}`,
            word: isUndercover ? undercoverWord : civilianWord,
            isUndercover: isUndercover,
            eliminated: false
        });
    }
    
    // 不再打乱玩家顺序，保持按编号顺序查看身份
}

// 更新角色屏幕
function updateRoleScreen() {
    const player = gameData.players[gameData.currentPlayerIndex];
    // 显示玩家编号和名称，确保按顺序显示
    currentPlayerSpan.textContent = `玩家${gameData.currentPlayerIndex + 1}`;
    playerWordSpan.textContent = player.word;
}

// 准备投票屏幕
function prepareVoteScreen() {
    playersList.innerHTML = '';
    gameData.votes = Array(gameData.players.length).fill(0);
    gameData.totalVotes = 0; // 重置已投票数
    gameData.currentVotingPlayerIndex = 0; // 重置当前投票玩家索引
    gameData.votingComplete = false; // 重置投票完成标志
    
    // 更新投票信息显示
    document.getElementById('current-voting-player').textContent = `玩家${gameData.currentVotingPlayerIndex + 1}`;
    document.getElementById('total-votes').textContent = '0';
    // 添加总玩家数显示
    document.getElementById('total-votes').parentElement.innerHTML = 
        `<i class="fas fa-check-circle"></i> 已投票数: <span id="total-votes">0</span>/${gameData.players.length - gameData.eliminatedPlayers.length}`;
    
    // 创建投票状态显示
    const voteStatus = document.createElement('div');
    voteStatus.id = 'vote-status';
    voteStatus.className = 'vote-status';
    playersList.appendChild(voteStatus);
    
    // 创建玩家列表（按编号顺序排列）
    for (let index = 0; index < gameData.players.length; index++) {
        if (!gameData.eliminatedPlayers.includes(index)) {
            const player = gameData.players[index];
            const playerItem = document.createElement('div');
            playerItem.className = 'player-item';
            playerItem.innerHTML = `
                <i class="fas fa-user-circle"></i> 
                <span class="player-name">玩家${index + 1}</span>
                <div>
                    <span class="vote-count">0</span>
                </div>
            `;
            playersList.appendChild(playerItem);
        }
    }
    
    // 创建投票选项区域
    const voteOptions = document.createElement('div');
    voteOptions.className = 'vote-options';
    voteOptions.innerHTML = `
        <h3><i class="fas fa-vote-yea"></i> 请选择投票对象:</h3>
        <div id="vote-buttons"></div>
        <button id="skip-vote" class="btn skip-btn"><i class="fas fa-ban"></i> 弃权</button>
    `;
    playersList.appendChild(voteOptions);
    
    updateVoteButtons();
    
    // 添加弃权按钮事件
    document.getElementById('skip-vote').addEventListener('click', () => {
        // 记录投票状态
        const voteStatus = document.getElementById('vote-status');
        const statusItem = document.createElement('div');
        statusItem.style.setProperty('--index', gameData.totalVotes || 0);
        statusItem.innerHTML = `<i class="fas fa-ban"></i> 玩家${gameData.currentVotingPlayerIndex + 1} 选择弃权`;
        voteStatus.appendChild(statusItem);
        
        // 移动到下一个玩家
        moveToNextVoter();
    });
    
    // 更新当前投票玩家显示
    updateCurrentVotingPlayer();
}

// 更新投票按钮
function updateVoteButtons() {
    const voteButtonsContainer = document.getElementById('vote-buttons');
    voteButtonsContainer.innerHTML = '';
    
    // 为每个未被淘汰的玩家创建投票按钮
    for (let index = 0; index < gameData.players.length; index++) {
        if (!gameData.eliminatedPlayers.includes(index)) {
            const voteBtn = document.createElement('button');
            voteBtn.className = 'vote-btn';
            voteBtn.innerHTML = `<i class="fas fa-user"></i> 玩家${index + 1}`;
            voteBtn.dataset.player = index;
            
            voteBtn.addEventListener('click', (e) => {
                const playerIndex = parseInt(e.target.dataset.player);
                
                // 增加被投票玩家的票数
                gameData.votes[playerIndex]++;
                gameData.totalVotes++;
                
                // 更新投票数显示
                const playerItems = document.querySelectorAll('.player-item');
                playerItems.forEach((item, idx) => {
                    if (idx === playerIndex) {
                        const voteCountSpan = item.querySelector('.vote-count');
                        voteCountSpan.textContent = gameData.votes[playerIndex];
                        item.classList.add('voted');
                    }
                });
                
                // 记录投票状态
                const voteStatus = document.getElementById('vote-status');
                const statusItem = document.createElement('div');
                statusItem.style.setProperty('--index', gameData.totalVotes || 0);
                statusItem.innerHTML = `<i class="fas fa-check-circle"></i> 玩家${gameData.currentVotingPlayerIndex + 1} 投票给了 玩家${playerIndex + 1}`;
                voteStatus.appendChild(statusItem);
                
                // 更新已投票数
                document.getElementById('total-votes').textContent = gameData.totalVotes;
                
                // 移动到下一个玩家
                moveToNextVoter();
            });
            
            voteButtonsContainer.appendChild(voteBtn);
        }
    }
}

// 移动到下一个投票者
function moveToNextVoter() {
    // 找到下一个未被淘汰的玩家
    do {
        gameData.currentVotingPlayerIndex++;
        // 如果所有玩家都已投票，标记投票完成
        if (gameData.currentVotingPlayerIndex >= gameData.players.length) {
            gameData.votingComplete = true;
            document.getElementById('confirm-vote').disabled = false;
            document.querySelector('.vote-options').style.display = 'none';
            
            const voteStatus = document.getElementById('vote-status');
            const statusItem = document.createElement('div');
            statusItem.style.setProperty('--index', gameData.totalVotes || 0);
            statusItem.innerHTML = `<strong><i class="fas fa-check-double"></i> 所有玩家已完成投票，请点击"确认投票"按钮继续</strong>`;
            voteStatus.appendChild(statusItem);
            
            document.getElementById('current-voting-player').innerHTML = "<i class='fas fa-check'></i> 投票完成";
            return;
        }
    } while (gameData.eliminatedPlayers.includes(gameData.currentVotingPlayerIndex));
    
    // 更新当前投票玩家显示
    updateCurrentVotingPlayer();
}

// 更新当前投票玩家显示
function updateCurrentVotingPlayer() {
    const currentVotingPlayer = document.getElementById('current-voting-player');
    currentVotingPlayer.innerHTML = `<i class="fas fa-user-circle"></i> 玩家${gameData.currentVotingPlayerIndex + 1}`;
    
    // 添加动画效果
    currentVotingPlayer.classList.remove('highlight-player');
    void currentVotingPlayer.offsetWidth; // 触发重绘
    currentVotingPlayer.classList.add('highlight-player');
}

// 计算投票结果
function countVotes() {
    return gameData.votes;
}

// 处理投票结果
function processVoteResult(eliminatedIndices) {
    // 检查是否出现平票（两个或更多玩家获得相同的最高票数）
    if (eliminatedIndices.length > 1) {
        // 平票情况，没有人被淘汰
        showGameResult('平票！', '出现平票，没有人被淘汰，游戏继续！');
        return;
    }
    
    // 只有一个人得到最高票，正常淘汰
    const eliminatedIndex = eliminatedIndices[0];
    const eliminatedPlayer = gameData.players[eliminatedIndex];
    gameData.eliminatedPlayers.push(eliminatedIndex);
    
    // 检查游戏是否结束
    if (eliminatedPlayer.isUndercover) {
        // 卧底被淘汰
        // 检查是否还有其他卧底
        const remainingUndercovers = gameData.undercoverIndices.filter(
            index => !gameData.eliminatedPlayers.includes(index)
        );
        
        if (remainingUndercovers.length === 0) {
            // 所有卧底都被淘汰，平民胜利
            gameData.gameOver = true;
            showGameResult('平民胜利！', '所有卧底都被淘汰了！');
        } else {
            // 还有卧底，游戏继续
            showGameResult('继续游戏', `卧底 ${eliminatedPlayer.name} 被淘汰了，但还有卧底隐藏在人群中！`);
        }
    } else {
        // 平民被淘汰
        const remainingPlayers = gameData.players.length - gameData.eliminatedPlayers.length;
        const remainingUndercovers = gameData.undercoverIndices.filter(
            index => !gameData.eliminatedPlayers.includes(index)
        );
        
        // 如果剩余玩家数量等于剩余卧底数量的2倍或更少，卧底胜利
        // 例如：剩余6人，其中3个卧底；或剩余4人，其中2个卧底
        if (remainingPlayers <= remainingUndercovers.length * 2) {
            gameData.gameOver = true;
            showGameResult('卧底胜利！', '卧底成功混入了最后的幸存者！');
        } else if (remainingUndercovers.length === 0) {
            // 所有卧底都被淘汰，平民胜利
            gameData.gameOver = true;
            showGameResult('平民胜利！', '所有卧底都被淘汰了！');
        } else {
            // 游戏继续
            showGameResult('继续游戏', `${eliminatedPlayer.name} 被淘汰了，但卧底仍然隐藏在人群中！`);
        }
    }
}

// 显示游戏结果
function showGameResult(title, content) {
    resultTitle.innerHTML = `<i class="fas fa-trophy"></i> ${title}`;
    resultContent.textContent = content;
    
    // 如果游戏结束，显示所有玩家角色（按编号顺序）
    playerRoles.innerHTML = '';
    if (gameData.gameOver) {
        // 获取平民词和卧底词
        const civilianWord = gameData.players.find(player => !player.isUndercover)?.word || '';
        const undercoverWord = gameData.players.find(player => player.isUndercover)?.word || '';
        
        // 更新词语对比信息
        civilianWordSpan.textContent = civilianWord;
        undercoverWordSpan.textContent = undercoverWord;
        
        // 按照玩家编号顺序显示
        for (let i = 0; i < gameData.players.length; i++) {
            const player = gameData.players[i];
            const roleClass = player.isUndercover ? 'undercover' : 'civilian';
            const roleText = player.isUndercover ? '卧底' : '平民';
            
            const playerRole = document.createElement('div');
            playerRole.className = 'player-role';
            playerRole.style.setProperty('--index', i);
            playerRole.innerHTML = `
                <i class="fas fa-${player.isUndercover ? 'user-secret' : 'user'}"></i> 玩家${i + 1}: <span class="${roleClass}">${roleText}</span> (词语: ${player.word})
            `;
            playerRoles.appendChild(playerRole);
        }
        
        continueGameBtn.style.display = 'none';
    } else {
        continueGameBtn.style.display = 'block';
    }
    
    showScreen(resultScreen);
}

// 辅助函数：显示指定屏幕
function showScreen(screen) {
    if (!screen) {
        console.error('Invalid screen element');
        return;
    }
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
    });
    screen.classList.add('active');
    
    // 如果不是设置界面，则更新当前活动屏幕
    if (screen !== settingsScreen) {
        currentActiveScreen = screen;
    }
}

// 辅助函数：随机打乱数组
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}