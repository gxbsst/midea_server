angular.module('starter.services', ['ngResource'])

    .service('Project', function ($resource, Actions) {
        return $resource('/projects/:id', {id: '@id'}, Actions);
    })
    .service('Huihuo', function ($resource, Actions) {
        return $resource('/projects/:projectId/huihuos', {projectId: '@projectId'}, Actions);
    })



