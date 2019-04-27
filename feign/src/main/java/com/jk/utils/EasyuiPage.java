/** 
 * <pre>项目名称:ccc 
 * 文件名称:EasyuiPage.java 
 * 包名:com.jk.qjp.utils 
 * 创建日期:2019年2月28日下午8:34:25 
 * Copyright (c) 2019, yuxy123@gmail.com All Rights Reserved.</pre> 
 */  
package com.jk.utils;


public class EasyuiPage {
	private Integer total;
	 private Object rows;
	public Integer getTotal() {
		return total;
	}
	public void setTotal(Integer total) {
		this.total = total;
	}
	public Object getRows() {
		return rows;
	}
	public void setRows(Object rows) {
		this.rows = rows;
	}
	/* (non-Javadoc)    
	 * @see java.lang.Object#toString()    
	 */
	@Override
	public String toString() {
		return "EasyuiPage [total=" + total + ", rows=" + rows + "]";
	}
	 
	 
}
