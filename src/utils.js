function promisify(fn) {
	return (...args) => {
		return new Promise((resolve,reject)=>{
			const cb = (err,val)=>{
				if (err) {
					reject(err);
				} else {
					resolve(val);
				}
			}
			fn(...args,cb)
		})
	}
}