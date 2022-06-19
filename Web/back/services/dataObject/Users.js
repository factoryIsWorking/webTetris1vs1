const Timeout = {
    Hour: 1, Min: 30, Sec: 0,
    getMiliSec() {
        return ((((this.Hour * 60) + this.Min) * 60) * this.Sec) * 1000;
    },
    getTimeOut(userID){// 타임아웃
        return setTimeout(() => {
            console.log(`${userID} 만료`)
        },Timeout.getMiliSec());
    },
}

const Users = {
    userList: {},
    addUser(userID, reqID) { // 유저 추가
        if (this.userList[userID] === undefined) {
            this.userList[userID] = this.make(userID, reqID);
        } else {
            this.userList[userID].reqID = reqID;
            clearTimeout(this.userList[userID].timeOut);
            this.userList[userID].timeOut = Timeout.getTimeOut(userID);
        }
    },
    make(userID, reqID) { // 유저 정보 생성
        return {
            userID: userID,
            reqID: reqID,
            timeOut: Timeout.getTimeOut(userID),
        }
    },
    banish(userID) { // 유저 추방
        delete userList[userID];
    }
};
module.exports = Users;