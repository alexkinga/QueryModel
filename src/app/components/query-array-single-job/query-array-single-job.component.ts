import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {map, Observable, combineLatest} from 'rxjs';
import {JobModel} from '../../models/job.model';
import {JobService} from '../../services/job.service';
import {JobWithTagsQueryQueryModel} from "../../models/job-with-tags-query.query-model";
import {JobTagModel} from "../../models/job-tag.model";

@Component({
  selector: 'app-query-array-single-job',
  templateUrl: './query-array-single-job.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryArraySingleJobComponent {
  readonly jobWithTags$: Observable<JobWithTagsQueryQueryModel[]> = combineLatest([
    this._jobService.getAllJobs(),
    this._jobService.getAllJobTags(),
  ]).pipe(
    map(([jobs, tags]: [JobModel[], JobTagModel[]]) => this._mapToJobsWithTags(jobs, tags)
    ));

  constructor(private _jobService: JobService) {
  }

  private _mapToJobsWithTags(jobs: JobModel[], tags: JobTagModel[]): JobWithTagsQueryQueryModel[] {
    const jobTagsMap = tags.reduce((a, c) => {
      return {...a, [c.id]: c}
    }, {}) as Record<string, JobTagModel>
    return jobs.map((job) => ({
        title: job.title,
        jobTags: job.jobTagIds.map((jId) => jobTagsMap[jId].name)
      })
    );
  }
}
