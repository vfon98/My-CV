import React from 'react';
import { Segment, Grid, Header, List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import SkillList from './SkillList';

function AdditionalSkills({ skills }) {
  const { database, editors, tools } = skills.additional;
  
  return (
    <Segment>
      <Grid columns={3}>
        <Grid.Row>
          <SkillList {...database} />
          <SkillList {...editors} />
          <SkillList {...tools} />
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

const mapStateToProps = state => ({ skills: state.skills });

export default connect(mapStateToProps)(AdditionalSkills);
