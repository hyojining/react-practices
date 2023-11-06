package com.poscodx.emaillist.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.poscodx.emaillist.vo.EmaillistVo;

@Repository
public class EmailllistRepository {
	
	@Autowired
	private SqlSession sqlSession;

	public List<EmaillistVo> findAll() {
		return sqlSession.selectList("emaillist.findAll");
	}

	public Long insert(EmaillistVo vo) {
		sqlSession.insert("emaillist.insert", vo);
		return vo.getNo();
	}
}
