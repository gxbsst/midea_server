angular.module('starter.services', ['ngResource'])

    .service('Project', function ($resource, Actions) {
        return $resource('http://localhost:4001/projects/:id', {id: '@id'}, Actions);
    })
    .service('Huihuo', function ($resource, Actions) {
        return $resource('http://localhost:4001/projects/:projectId/huihuos', {projectId: '@projectId'}, Actions);
    })



