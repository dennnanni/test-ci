import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

// We just mount a simple div for the dummy test
const DummyComponent = {
  template: '<div>Hello Vitest</div>'
};

describe('Dummy Frontend Test', () => {
  it('should render the dummy component', () => {
    const wrapper = mount(DummyComponent);
    expect(wrapper.text()).toContain('Hello Vitest');
  });
});
