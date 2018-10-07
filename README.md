in case of encountering end of space problem (ubuntu): 

https://github.com/facebook/create-react-app/issues/3486

https://stackoverflow.com/questions/22475849/node-js-error-enospc/32600959#32600959


to avoid END OF SPACE run
sudo echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p